import test from "tape"
import ssCheckvar from "../src"

test("ssCheckvar", (t) => {
	t.equal("", ssCheckvar(), "return empty string")
	t.equal("", ssCheckvar(undefined), "return empty string")
	t.equal("", ssCheckvar(0), "return empty string")
	t.equal("", ssCheckvar(false), "return empty string")
	t.equal("foo", ssCheckvar("foo"), "return foo string")
	t.equal("foo", ssCheckvar("foo","bar"), "return foo string")
	t.equal("bar", ssCheckvar("","bar"), "return bar string")
	t.equal("bar", ssCheckvar(undefined,"bar"), "return bar string")
	t.equal("bar", ssCheckvar(0,"bar"), "return bar string")
	t.equal("bar", ssCheckvar(false,"bar"), "return bar string")
	t.end()
})
