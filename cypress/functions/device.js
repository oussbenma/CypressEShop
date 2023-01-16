export const isMobile = (width) => {
    return (width < Cypress.env("mobileViewportWidthBreakpoint"))
}