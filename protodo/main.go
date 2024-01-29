package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"

	pb "protodo/protodo/protodo"

	_ "github.com/mattn/go-sqlite3"
)

type server struct {
	pb.UnimplementedTodoServiceServer
	db *sql.DB
}

func NewServer(db *sql.DB) *server {
	return &server{db: db}
}

func (s *server) AddTodo(ctx context.Context, req *pb.TodoRequest) (*pb.TodoResponse, error) {
	result, err := s.db.ExecContext(ctx, "INSERT INTO todos (title, done) VALUES (?, ?)", req.Title, false)
	if err != nil {
		return nil, fmt.Errorf("failed to insert todo: %v", err)
	}

	id, _ := result.LastInsertId()
	return &pb.TodoResponse{Id: fmt.Sprintf("%d", id), Title: req.Title}, nil
}

func (s *server) DeleteTodo(ctx context.Context, req *pb.DeleteTodoRequest) (*pb.DeleteTodoResponse, error) {
	_, err := s.db.ExecContext(ctx, "DELETE FROM todos WHERE id = ?", req.Id)
	if err != nil {
		return nil, fmt.Errorf("failed to delete todo: %v", err)
	}

	return &pb.DeleteTodoResponse{}, nil
}

func (s *server) MarkTodoAsDone(ctx context.Context, req *pb.MarkTodoAsDoneRequest) (*pb.MarkTodoAsDoneResponse, error) {
	_, err := s.db.ExecContext(ctx, "UPDATE todos SET done = ? WHERE id = ?", true, req.Id)
	if err != nil {
		return nil, fmt.Errorf("failed to mark todo as done: %v", err)
	}

	return &pb.MarkTodoAsDoneResponse{}, nil
}

func main() {
	db, err := sql.Open("sqlite3", "todos.db")
	if err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}
	defer db.Close()

	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS todos (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			title TEXT,
			done BOOLEAN
		)
	`)
	if err != nil {
		log.Fatalf("failed to create table: %v", err)
	}

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()

	pb.RegisterTodoServiceServer(s, NewServer(db))

	log.Println("Server listening on port 50051...")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
