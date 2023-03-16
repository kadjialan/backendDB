/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email_address
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         firstName:
 *           type: string
 *           description: The firstName of the user
 *         lastName:
 *           type: string
 *           description: The lasttName of the user
 *         emailAaddress:
 *           type: string
 *           description: The password of the user
 *         phone:
 *           type: string
 *           description: The firstName of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         id: 1
 *         firstName: Rash
 *         lastName: Lahfen
 *         emailAddress: rash237@gmail.com
 *         phone: 5873398289
 *         password: rashking
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
 *   get:
 *     summary: Lists all the users
 *     tags: [users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new users
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /users/{id}:
 *   get:
 *     summary: Get the users by id
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 *   put:
 *    summary: Update the users by the id
 *    tags: [users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The User was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The User was deleted
 *       404:
 *         description: The User was not found
 */

const express = require("express");
const User = require("../database/users");
var router = express.Router();
const { getAll, postUser, getUser, putUser, patchUser, deleteUser } = require("../controller/userController");

router.get("/", getAll);

router.post("/", postUser);

router.get("/:id", getUser);

router.put("/:id", putUser);

router.patch("/:id",patchUser);

router.delete("/:id", deleteUser);

module.exports = router;
