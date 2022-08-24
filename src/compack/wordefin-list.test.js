import { render, screen, waitFor } from "@testing-library/react"
import WordefinList from "./wordefin-list"
import '@testing-library/jest-dom'

describe('wordefin-list', () => {
    it("load wordefins when element rendered", async () => {
        render(<WordefinList kws={{ initial: "o", tailine: "" }} />)

        await waitFor(() => screen.getByRole('list'))

        expect(screen.getByRole('list')).toBeInTheDocument()
    })
})