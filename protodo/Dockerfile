FROM golang:1.17-alpine as builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o main .

FROM alpine:latest

RUN mkdir /app

COPY --from=builder /app/main /app/main

CMD ["/app/main"]

