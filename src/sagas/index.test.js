// import test from "tape";
import { put, call } from "redux-saga/effects";
import { delay } from "redux-saga";
import { requestLocation } from "./index";

it("incrementAsync Saga test", assert => {
  const gen = requestLocation();
  expect(gen.next().done).toBe(false);
  expect(gen.next().done).toBe(true);
});
