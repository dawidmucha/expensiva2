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

rec - ALWAYS a receipt, NEVER a record or anything else

item - singular entity of a product in a receipt

subcat - subcategory

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
	return el
})
```

- to normalize stuff like create/add/append/make etc. all operations are to be named based on CRUD, so to "read users" means to return a list of all users
		