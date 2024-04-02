/**
 * This is the standard index.ts starting point.
 *
 * author  Curtis Edwards
 * version 1.0
 * since   2024-03-19
 */
import { CurtisStack } from './CurtisStack'

let fruits = new CurtisStack()
fruits.push("apple")
fruits.push("banana")
fruits.push("cherry")
console.log("peak: " + fruits.peak)
console.log("fruits: " + fruits.showStack)
console.log("popped: " + fruits.popItem())
console.log("fruits: " + fruits.showStack)
fruits.clear()
console.log("Clearing stack...")
console.log("fruits: " + fruits.showStack)
console.log("")

let colours = new CurtisStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("peak: " + colours.peak)
console.log("colours: " + colours.showStack)
console.log("popped: " + colours.popItem())
console.log("popped: " + colours.popItem())
console.log("peak: " + colours.peak)
console.log("colours: " + colours.showStack)
fruits.clear()
console.log("Clearing stack...")
console.log("colours: " + colours.showStack)
console.log("")

let shapes = new CurtisStack()
shapes.push("square")
shapes.push("triangle")
shapes.push("circle")
console.log("peak: " + shapes.peak)
console.log("Clearing stack...")
console.log("shapes: " + shapes.showStack)
console.log("peak: " + shapes.peak)
console.log("")

console.log("\nDone.")
