import { Validator, Validation } from "../../../types";

export default function validate<T>(type: Validator, data: T): Validation;
