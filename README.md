## Job Skills in Bubbles

#### [An interactive take on what skills matter to what jobs.](https://ajdelossantos.github.io/Job-Skills-in-Bubbles/)

![Welcome](https://raw.githubusercontent.com/ajdelossantos/Job-Skills-in-Bubbles/master/docs/welcome.png)

### Background and Overview

> _Data at Work is about enabling an open 21st century workforce data
> ecosystem... by developing datasets, tools, standards, and best practices for
> publishing data on skills, jobs, and training. The heart of Data at Work is
> the Open Skills Project... It’s aim is to improve our understanding of the
> labor market and reduce frictions in the workforce data ecosystem by enabling
> a more granular common language of skills among industry, academia,
> government, and nonprofit organizations._

> --<cite>Vision Statement, Data at Work. http://dataatwork.org/about/</cite>

The Open Skills Project database is a well-maintained database that catalogs
jobs and skills and connects them together based on data extracted and
aggregated from public and private sources (i.e. CareerBuilder, et al). It is
analagous in role and quality to the data collected by the Bureau of Labor
Statistics; both attempt to represent the labor market and ask: what are jobs
called, and what skills are relevant to those jobs?

[Open Skills Project API](http://api.dataatwork.org/v1/spec/)

The answers to such questions are immediately useful to job searchers looking to
better understand and broaden their search strategies or non-technical
labor-market researchers. This inforgraphic aims to create a thoughtful and
critical visualization of 119 core job skills to help everyday users understand
the language of the job market and ultimately help them find a job.

<br>

### Functionality and MVPs

The Open Skills Project API is both accessible and powerful; this application
utilizes their "Job Title Autocomplete" and "Get Associated Skills for a Job"
API endpoints.

Searching for a job title returns a list of job titles which contain the search
string. Each valid job in the database has a ranking of 119 core job-skills.

Clicking on a job title displays a bubble chart of those job-skills and a ranked
listing of those skills. Every skill carries two metrics:

* `importance:float // range [1, 5]` representing a skill's importance to job
  success; importance correlates linearly to size
* `level:float // range [0, 7]` representing a skill's expertise level required
  for job success; level correlates to color, on a scale from purple < red <
  yellow < green < blue

Users may

* Find job titles that contain a certain job-title-string
* See a ranking of 119 core job-skills as it pertains to the selected job
* Skills have a name and description
* Skills are ordered by O\*NET 'importance' (scaled 1-5) then 'level' (scaled
  1-7)
* Job search results and their relevant skills will have a 'list' and
  'graphical' view that can be interacted with

In addition, this project will include:

* An About page that describes motivation and links to the project's
  organization

<br>

#### Graphical View

<br>
![Graphical_View](https://raw.githubusercontent.com/ajdelossantos/Job-Skills-in-Bubbles/master/docs/skill-graphics.png)
<br>

#### List View

<br>
![List_View](https://raw.githubusercontent.com/ajdelossantos/Job-Skills-in-Bubbles/master/docs/job-list.png)
<br>

### Architecture and Technologies

This project uses the following technologies:

* D3.js to render JSON skill objects as interactive bubbles
* JQuery for AJAX requests and DOM manipulation

<br>

### Planned Features

* [ ] Search support for skills
* [ ] Raw JSON output
* [ ] Search for the 'official' normalized name of a job
* [ ] See jobs related to a normalized job
* [ ] Error reporting

<br>

## Contact

Alvin James T. Delos Santos

* a.jamesdelossantos@gmail.com
