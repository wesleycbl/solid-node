import { Router } from "express";
import { createUSerController } from "./useCases/createUser";

const router = Router();

router.post("/users", (request, response) => {
    return createUSerController.handle(request, response)
});

export { router }