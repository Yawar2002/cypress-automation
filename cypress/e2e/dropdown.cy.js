describe ('Handling the dynamic dropdown',() =>{
    it('Drops the dropdown',() => {
        cy.visit('https://www.booking.com/', {headers:{"Accept-Encoding": "gzip,deflate"}})
       // cy.get(<input name="ss" class="eb46370fe1 __web-inspector-hide-shortcut__" placeholder="Where are you going?" data-destination="1" autocomplete="off" aria-autocomplete="list" aria-controls="autocomplete-results" aria-haspopup="listbox" aria-label="Where are you going?" aria-expanded="true" role="combobox" id=":rh:" value=""></input>)
        cy.get('#BE_flight_origin_city').click().clear().type("KHI",{delay:200})
        cy.get(".viewport span:last-child").each(($el, index, $list) => {
            cy.log($el.text())
            if($el.text() ==='KHI') {
                cy.wrap($el).click()
            }
        })
    })
})