import { test } from "vitest"
import request from "supertest"
import server from "express"

function app() {
  let app = server()
  app.get("/user", function (req, res) {
    res.status(200).json({ name: "john" })
  })
  return app
}

test("simple promise works", () => {
  Promise.resolve("blah").then((x) => console.log(x))
})

test("supertest works without then", async () => {
  let _res = await request(app()).get("/user")
  console.log(_res.body)
})

test("crashes with then or catch", () => {
  request(app())
    .get("/user")
    .then((res) => console.log(res.body)) // comment to prevent crashing
    .catch() // comment to prevent crashing
})
