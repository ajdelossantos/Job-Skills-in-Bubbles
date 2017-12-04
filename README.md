## Workforce Data Initiative Open Skills API--UI

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
Statistics; both attempt to represent the labor market and figure out what are
jobs called, and what skills are relevant to those jobs?

[Open Skills Project API](http://api.dataatwork.org/v1/spec/)

The Open Skills Project API is easy to use and offers some very powerful utility
calls to its database when searching--it can autocomplete and normalize job and
skill names and fetch related jobs to skills, skills to jobs, jobs to jobs, and
skills to jobs.

This is immediately useful to job searchers looking to better understand and
broaden their search strategies or non-technical labor-market researchers. This
project will aims to create a visually attractive and responsive GUI wrapping
the Open Skills API's robust functionality to help everyday users (i.e. not
labor-market researchers) understand the language of the job market and
ultimately help them find a job.

### Scope and Functionality

This project will serve as a frontend for traversing the Open Skills Project
jobs database and will let users search for job titles and see skills and other
job titles associated with those jobs.

(_The skills database behaves... unexpectedly. For example, the skill "Ruby on
Rails" is canonically uniquely identified, but never associated with any jobs
that include the string "%Software%". For these reasons in addition to the
project timeframe, full skills database functionality is out of scope._)

Users will be able to

* [ ] Find job titles that contain a certain string
* [ ] Search for the 'official' normalized name of a job
* [ ] See jobs related to a normalized job
* [ ] See skills related to a job _ [ ] Skills have a normalized name and
      description _ [ ] Skills are ordered by O\*NET 'importance' (scaled 1-5)
      then 'level' (scaled 1-7)
* [ ] Job search results and their relevant skills will have a 'list' and
      'graphical' view that can be interacted with

In addition, this project will include:

* [ ] An About page describing basic functionality and linking to the project

### Wireframes

<br><br>

#### Graphical View

<br>
![Graphical View](https://raw.githubusercontent.com/WDI-UI/blob/master/docs/wireframes/graphical-skills-view.png)
<br>

#### List View

<br>
![List View](https://raw.githubusercontent.com/WDI-UI/blob/master/docs/wireframes/list-job-view.png)
<br>

### Architecture and Technologies

This project will be implemented with the following technologies:

* React-Redux to manage global state of 'job' and 'skill' objects fetched by API
  requests
* JQuery for AJAX requests
* HTML5 Canvas for graphical representations of connected jobs and skills

### Bonus Features

* [ ] Search support for skills
* [ ] Raw JSON output
* [ ] D3 for more powerful, scalable data-visualizations and Webpack to manage
      any resulting scripts
