import { rest } from "msw";

export const handlers = [
    rest.get('/o//words', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, word: 'one', defin: '一；一个' },
                { id: 2, word: 'online', defin: '联机的；在线的' }
            ])
        )
    }),
    rest.get('//o/words', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, word: 'logo', defin: '商标；标识；图形' },
                { id: 2, word: 'two', defin: '二；两个' }
            ])
        )
    }),
    rest.get('/t/o/words', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, word: 'to', defin: '对于；为了；(表示方向)到；向；(表示间接关系)给' },
                { id: 2, word: 'two', defin: '二；两个' }
            ])
        )
    }),
    rest.post('/words', (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json({
                id: 11
            })
        )
    }),
    rest.post('/words/11', (req, res, ctx) => {
        return res(
            ctx.status(200)
        )
    }),
    rest.delete('/words/11', (req, res, ctx) => {
        return res(
            ctx.status(200)
        )
    })
]