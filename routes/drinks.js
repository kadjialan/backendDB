/**
 * @swagger
 * components:
 *   schemas:
 *     drink:
 *       type: object
 *       required:
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the drink
 *         description:
 *           type: text
 *           description: The lasttName of the drink
 *         imageUrl:
 *           type: string
 *           description: The password of the drink
 *         recipe:
 *           type: string
 *           description: The firstName of the drink
 *         alcoholic:
 *           type: boolean
 *           description: The password of the drink
 *       example:
 *         name: heineken
 *         description: Heineken NV (Heineken) is a brewing company that develops, markets and sells alcoholic beverages
 *         imageUrl: rhttps://www.encopadebalon.com/3480-large_default/heineken-premium-lager-beer-tin-24-x-330ml.jpg
 *         recipe:  All Grain Czech Premium Pale Lager homebrew recipe
 *         alcoholic: true
 */

/**
 * @swagger
 * tags:
 *   name: drinks
 *   description: The drinks managing API
 * /drinks:
 *   get:
 *     summary: Lists all the drinks
 *     tags: [drinks]
 *     responses:
 *       200:
 *         description: The list of the drinks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/drink'
 *   post:
 *     summary: Create a new drinks
 *     tags: [drinks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/drink'
 *     responses:
 *       200:
 *         description: The created drink.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/drink'
 *       500:
 *         description: Some server error
 * /drinks/{id}:
 *   get:
 *     summary: Get the drinks by id
 *     tags: [drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The drink id
 *     responses:
 *       200:
 *         description: The drink response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/drink'
 *       404:
 *         description: The drink was not found
 *   put:
 *    summary: Update the drinks by the id
 *    tags: [drinks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The drink id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/drink'
 *    responses:
 *      200:
 *        description: The drink was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/drink'
 *      404:
 *        description: The drink was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the drink by id
 *     tags: [drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The drink id
 *
 *     responses:
 *       200:
 *         description: The drink was deleted
 *       404:
 *         description: The drink was not found
 */


const express = require("express");
const {
  getAllDrinks,
  postDrinks,
  getDrinks,
  putDrinks,
  patchDrinks,
  deleteDrinks,
} = require("../controller/drinksController");
var router = express.Router();

router.get("/", getAllDrinks);

router.post("/", postDrinks);

router.get("/:id", getDrinks);

router.put("/:id", putDrinks);

router.patch("/:id", patchDrinks);

router.delete("/:id", deleteDrinks);

module.exports = router;
