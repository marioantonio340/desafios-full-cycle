FROM golang:alpine3.18 AS build

WORKDIR /app

COPY . .

RUN go build -ldflags "-s -w" -o main .

FROM scratch

COPY --from=build /app/main /

CMD ["/main"]