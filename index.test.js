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

test.only("works without then", async () => {
  let _res = await request(app()).get("/user")
  console.log(_res.body)
})

test("crashes with then", () => {
  request(app())
    .get("/user")
    .then((res) => console.log(res.body)) // comment to prevent crashing
})
