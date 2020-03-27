# Database Structure

collections:
- users
	- email
	- hashed password
	- settings
		- avatar (base64)
		- time format
		- currency symbol
		- currency affix
		- time format
	- categories
		- category
			- subcategory
			- ...
		- ...
	- shops
		- shop
			- shop name
			- shop icon (base64)
		- ...
	- items(array)
	- auth tokens
- receipts
	- user id
		- receipt id
			- date
			- receipt price
			- shop
			- items
				- item id
					- quantity
					- price
					- category
					- subcategory
				- ...
		- ...
	- ...

# termonilogy

receipt - a group of items, as you have a group of items on your receipt when you buy something in a shop

item - singular entity of a product in a receipt

# coding standards

- functions: `getSth()` returns a value while `printSth()` returns a string
- no semicolons
- function intendation look like this
```
const function = () => {

}
```
- method chaining look like this
```
array.map(el => {
	return el
}).filter(el => {
	return elS
})
```
		