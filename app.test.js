const request = require("supertest");

const app  = require("./app")


describe("POST /users", () => {
    describe("given a username and password", () => {
        //should save the username and password to the database
        // should respond with a json object constianing the user id
        // should respond with a status code of 200
  test("should respond with a status code of 200", async() => {
   const response = await request(app).post("/users").send({
    userName:"john",
    passWord:"124"
   })
   expect(response.statusCode).toBe(200)
  })
 test("should specify json in the content type header",async (req,res) => {
const response = await request(app).post("/users").send({
    userName:"john",
    passWord:"124"
})

 expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))

 })

 test("check if user id is been returned from the client", async() => {
    const response = await request(app).post("/users").send({
        userNAME:"JOHN",
        passWord:"123"
    })
    expect(response.body.userId).toBeDefined()
 })
        // should specify json in the content type header
    })
    describe("when the username and pasword is missing", () => {
        // 
        test("should respond with a status code of 400 when the user password is missing", async() => {
            const response  = await request(app).post("/users").send({
                userName:"John",
                // userPassword:"123"
            })
            expect(response.statusCode).toBe(400)
        })
       
    })

})

