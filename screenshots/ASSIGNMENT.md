# Culture Amp’s Front End Coding Test (UX Engineer edition)

Given an HTTP API that offers access to a database of survey results, your task
is to implement a clear, usable, web-based interface to display the data
supplied by this API. This application will be used by managers at a company to
understand how its employees feel about the company and their work.

The finished application would process the survey data from the API live in the
browser and display the results to the user; however, since you are applying for
a UX Engineer role, please focus just on implementation of the actual user
experience. You might, for example, submit a UI that displays a representative,
fixed dataset. Please don't burn a bunch of time writing code to consume the
API, or to process the data it returns. In a real-world project at Culture Amp,
your team would include another engineer who would implement this stuff.

You are welcome to use any tools, libraries or frameworks you think make sense.
We tend to build our UIs with React, but alternatives and even no framework at
all are completely fine.

**Note:** If you prefer to **submit an existing project** to demonstrate your
skills, we are happy to accept this as an alternative. We'll need you to explain
how you contributed to the submission (or if you made it all yourself), and any
other context that will help us to understand your design decisions.

## The API

Here is the root URL for an HTTP API that offers access to a database of survey
results:

https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production

This root URL will give a 404 error by design. To get a response with data, you
need to append a recognised API endpoint, such as /surveys:

https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production/surveys

If you request this URL, you will get a list of the surveys that are stored in
the database, and high-level statistics for each. For each survey, a URL is
included that points to the address you can use to fetch the details for that
specific survey.

(If the API URL doesn't work for you, please contact us. It may have changed!)

The details you can get for each survey include all of the response data. Each
survey is broken into one or more themes, each theme contains one or more
questions, and each question contains a list of responses. A response represents
an individual user (`"respondent_id"`) answering an individual question
(`"question_id"`). The content of each response represents an agreement rating
on a scale of `"1"` (strongly disagree) to `"5"` (strongly agree). If you
wished, you could obtain all of the responses for a single user by consulting
all of the responses with that user’s `"respondent_id"`.

## Requirements

Your submission should include:

- a list of all the surveys with data available, and some way for the user to
  choose one to view that survey's results
- a view of an individual survey's results, including:
  - the participation rate for the survey, as a percentage
  - the average rating (from 1 to 5) for each question

In your submission, please also include a README file with clear instructions
that we can follow to review your work. That is, if you submit an application
that we can run, tell us how to run it. If it's closer to a static mockup, tell
us how to view it.

You should also include in your README any other details you would like to
share, such as tradeoffs you chose to make, what areas of the problem you chose
to focus on, or any reasons you may have for your design decisions. We value
your time, so if you chose to skip something to make sure you could demonstrate
other skills, let us know!

## Recommendations

- Even if you don't consider yourself to be a designer, you'll need to make some
  design decisions to implement a UI. Think about the product you are creating,
  and the needs of its users. Also consider what skills you want to show us, and
  give yourself opportunities to do so in your design.
- Be creative in choosing how to display the results.
- Static JSON files load pretty quickly, but not all web APIs are so performant.
  Consider how your application will behave if the API is slow.

Beyond meeting the minimum requirements above, it’s up to you where you want to
focus. We don’t expect a fully-finished, production-quality web application;
rather, we’re happy for you to focus on whatever areas you feel best showcase
your skills.

In particular, for this role, we would hope to see these skills demonstrated:

 - web platform expertise (HTML, CSS, DOM and respective best practices)
 - design systems thinking (reusable styles and components)
 - communication (is the project and code easy for others to understand?)

## Submitting your solution

Assuming you use Git to track changes to your code, when you’re ready to submit
your solution, please use `git bundle` to package up a copy of your repository
(with complete commit history) as a single file and send it to us according to
the instructions in the assignment email.

```
git bundle create front-end-coding-test.bundle main
```

(This assumes your primary branch is called `main`.
`master` is fine too, if that’s what you use.)

If you don't use Git, a ZIP archive of your submission is also acceptable.

We look forward to seeing what you come up with!
