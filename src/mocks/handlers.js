import { rest } from "msw";
import { restBase } from "../helper/rest-fetcher";

export const handlers = [
    rest.get(`${restBase}///words`, (req, res, ctx) => {
        return res(
            ctx.status(400),
        )
    }),
    rest.get(`${restBase}/o//words`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, word: 'one', defin: '一；一个' },
                { id: 2, word: 'online', defin: '联机的；在线的' }
            ])
        )
    }),
    rest.get(`${restBase}//o/words`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, word: 'logo', defin: '商标；标识；图形' },
                { id: 2, word: 'two', defin: '二；两个' }
            ])
        )
    }),
    rest.get(`${restBase}/t/o/words`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, word: 'to', defin: '对于；为了；(表示方向)到；向；(表示间接关系)给' },
                { id: 2, word: 'two', defin: '二；两个' },
                { id: 3, word: 'techno', defin: '现代电子乐；高技术音乐' }
            ])
        )
    }),
    rest.get(`${restBase}/u/login`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWduYW1lIjoic2VhbnQiLCJleHAiOjE2NjI1ODg1MDh9" +
                    ".GctlJ0aozyWLIgmzvHsLyKZiWufy9iL3QgIOtJ58Fos"
            })
        )
    }),
    rest.post(`${restBase}/my/words`, (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json({
                id: 11
            })
        )
    }),
    rest.post(`${restBase}/my/words/:id`, (req, res, ctx) => {
        const { id } = req.params
        return res(
            ctx.status(200)
        )
    }),
    rest.delete(`${restBase}/my/words/:id`, (req, res, ctx) => {
        const { id } = req.params
        return res(
            ctx.status(200)
        )
    })
]