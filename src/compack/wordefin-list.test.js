import { render, screen, waitFor, within } from "@testing-library/react"
import WordefinList from "./wordefin-list"
import { BrowserRouter } from "react-router-dom"

describe('wordefin-list', () => {
    it("load wordefins by initial when element rendered", async () => {
        render(<BrowserRouter><WordefinList kws={{ initial: "o", tailine: "" }} /></BrowserRouter>)

        const list = await screen.findByRole('list')
        const items = within(list).getAllByRole("listitem")
        const fail = screen.queryByTitle('failure')

        expect(items.length).toBe(2)
        expect(fail).toBeNull()
    })
    it("load wordefins by tailine when element rendered", async () => {
        render(<BrowserRouter><WordefinList kws={{ initial: "", tailine: "o" }} /></BrowserRouter>)

        const list = await screen.findByRole('list')
        const items = within(list).getAllByRole("listitem")
        const fail = screen.queryByTitle('failure')

        expect(items.length).toBe(2)
        expect(fail).toBeNull()
    })
    it("load wordefins by initial and tailine when element rendered", async () => {
        render(<BrowserRouter><WordefinList kws={{ initial: "t", tailine: "o" }} /></BrowserRouter>)

        const list = await screen.findByRole('list')
        const items = within(list).getAllByRole("listitem")
        const fail = screen.queryByTitle('failure')

        expect(items.length).toBe(3)
        expect(fail).toBeNull()
    })
    it("load wordefins without initial or tailine when element rendered", async () => {
        render(<BrowserRouter><WordefinList kws={{ initial: "", tailine: "" }} /></BrowserRouter>)

        const fail = await screen.findByTitle('failure')
        const list = screen.queryByRole('list')

        expect(fail).toBeInTheDocument()
        expect(list).toBeNull()
    })
})
