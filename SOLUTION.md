SOLUTION
========

Estimation
----------
Estimated: 8 hours total

### Setup

Initial project setup, forking, adding tailwind, typescript etc setting up initial data fetch. At first I tried adding tailwind v4 using vite setup, but quickly realized it imports huge amount of vite libraries which are just unnecessary bloat, so I reverted to v3 and postcss. In a larger project vite might be more appropriate and justify vite tool suite.
I also noticed the tech demo repo has not been updated for a few years and its data json file image url placeholders are out of date and dont work anymore - I've updated those as well.

Spent: 2 hours

### Core functionality

Next part was deciding on basic layout for the app, setting up a grid for cards and filter sidebar. Filtering logic was a bit tricky as it required to work with both api limitations and a ReactQuery which I never used before but heard a lot of good things about. parseUrlQueries was the longest single thing I worked on during this tech task - it underwent three rewrites from basic array management to destructured state management to final elegant solution.
Once a robust query parser was built and I was happy with it, it was just a case of levelraging it in filter functionality.

Spent: 3 hours

### Cleanup

This was a wrap-up clean-up session. I've updated styling across the board, got rid of unneccessary files and componenets. And decided to work on filter UX more to make it smoother and more logical. I've replaced preset price buttons with a multi-step range slider that is a standard expected functionality. I've also tweaked filter buttons to toggle on click to provide visual queues to the user to know what is being displayed and what filters are active. 

Spent: 3 hours

Solution
--------

In my understanding the core of tech task complexity revolves around implementing filters correctly, and that is what I focused on more than anything else. Filter logic underwent several rewrites and optimizations - originally I built it with a bunch of forEach and if/else statements to see if my initial idea works. I moved on to destructuring the params array and individually checking if key/value exist which was a working but bulky and ugly solution. And only after digging around URL api I came up with a robust elegant solution that I submitted in parseUrlQueries.
The rest was simple tailwind styling and some conditionals to fetch and display.
I pass in data values to card array and that gets updated when value changes based on filter selection. Pretty simple stuff. Looking back on it now I should have leveraged Context functionality to pass data around more easily.

In a context of larger application the whole tech task can be wrapped up in its own "Products" folder and can be its own page. Thinking of this as an exploratory spike I think this ended up as a solid demo of products page and can be easily extended with additional features. 

One of the things I used this tech demo for is to try out ReactQuery library to fetch data. Its a compact, powerful, and flexible one that I heard a lot of good things about and can potentially sway me from vanilla JS fetch functionality. Once I figured it out it was a relatively easy job to get it working in the way I needed, altho I am sure it can be extended much further to combine requests, cache, and significantly optimize performance. Its refetch function was particularly handy, I am sure combined with caching it would be much more powerful.

One of the limitations I hit was lack of products data that I understood as part of tech task constraints (altho I did update img url to actually work). I decided to embrace the limitation and use it as a functional constraint. Decision to not implement extensive pagination functionality and leave it only as basic visual queue to satisfy the criteria was a balance of time and functionality. I am more than happy to spend a few more hours but that will translate into several days in which I'll have to find that time, which will extend the submission time even more. While ther is no deadline, there are many other candidated and I cant stew on this for longer than neccessary.


### Additional test case examples

``` gherkin

WHEN I visit the product collection page
THEN I expect to see filters sidebar
AND I expect to see a table of products
WHEN I search for "Chews" in filters sidebar
WHEN I filter by "Price" "90" in the sidebar
WHEN I filter by "Subscription" "Yes" in the sidebar
THEN I expect to see 2 products in the resulting table

WHEN I visit the product collection page
THEN I expect to see filters sidebar
AND I expect to see a table of products
WHEN I search for "chew" in product name filter sidebar
WHEN I search for "Cat" in filters sidebar
THEN I expect to see "2" products in the resulting table

WHEN I visit the product collection page
THEN I expect to see filters sidebar
AND I expect to see a table of products
WHEN I filter by "Subscription" "No" in the sidebar
WHEN I filter by "Price" "30" in the sidebar
THEN I expect to see no products and reset filter button

```

Future Improvements
---------

#### Context
I am passing data around components via props, and didnt envision this as a limitation when throwing the app together. However looking at it now I think its awkward and next thing I'd update is to move to Context and make data availability much easier and smoother. Would help with typesetting as well.

#### json-server API update
The way the API works out of the box doesnt match well with the way product data is setup - specifically tags. API works by adding results that match, while I think basic user expectation when filtering is removing results. I would expect selecting Cats and Dogs tags at the same time would filter product to only show items that have both tags. Currently API returns results for items that have either one or the other or both tags, which can be confusing and misleading if not doublechecked.

#### Button component
I'd like to clean up the app and neaten up components better. I have prorotyped button component to show how tailwind classes could be managed. Button component can create basic button, and more complex button with active/inactive state, without duplicating classes. It also takes into account different theming and lays out near-infinite number of tailwind classes into a manageable readable structure.
I would also couple button toggle state with current search params. Currently they are done separately, but developing app further will require coupling so using localStorage and restoring or resetting search state would be functional and filter buttons/sliders would react.

#### Responsiveness and Theming
This is a general styling bit - I'd like to make it more responsive and cater to dark theming. I dont know the setup the app will be tested in, but if the screen isnt as wide as mine (1920x1200) it might look squashed.
I am a big fan of dark theming, but its a bit tricky to design a color scheme with petlab-blue color with dark background that looks decent, so I left it at light theme.

#### Accessibility
This is generally most time-consuming element as it requires a lot of conditional js, alt styling and extensive testing, I didnt have time to delve deep into it, however if I do come back to the app and flesh it out into its own sample page I'll definitely implement accessible color scheme, aria-params and logical screen reader support.

