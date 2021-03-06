const assert = require("assert")
const SailsZen = require("../SailsZen") 
const fs = require("fs")

const filepath = __dirname + '/tmp/.sailsrc'

describe("sailsrc generation", () => {

  it("should generate a sailsrc file that disables grunt", () => {

    SailsZen.writeFile(".sailsrc", filepath)

    const contents = fs.readFileSync("./test/tmp/.sailsrc").toString().replace(/\s+/, "")

    assert.strictEqual(JSON.parse(contents).hooks.grunt, false)
  })

  after(() => {
    fs.unlink(filepath)
  })
})

