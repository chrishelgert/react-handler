# React-Handler

[![npm version](https://badge.fury.io/js/react-handler.svg)](https://badge.fury.io/js/react-handler)
[![Build Status](https://travis-ci.org/chrishelgert/react-handler.svg?branch=master)](https://travis-ci.org/chrishelgert/react-handler)
[![codecov](https://codecov.io/gh/chrishelgert/react-handler/branch/master/graph/badge.svg)](https://codecov.io/gh/chrishelgert/react-handler)

> A react-component for handling typical react/redux-states (loading, error, ...)

## Usage

```bash
npm install react-handler --save
```

### Handler

```javascript
import handler from 'react-handler';
import ArticleList from './ArticleList';

class Example extends Component {
  // ...

  state = {
    loading: false,
    error: '',
    articles: this.props.articles,
  };

  // ...

  render() {
    return (
      <Handler
        loading={this.state.loading}
        errorMessage={this.state.error}
        loadingMessage="loading..."
        emptyMessage="0 Articles found"
        checkedProperty={this.state.articles}
      >
        <ArticleList articles={this.state.articles} />
      </Handler>
    );
  }
}
```

> Configuration
* All params from Subhandler´s will be available in Handler (Messages will only be prefixed)
* showComponentWhileLoading - will show you´re Component while your data is loading (default: true)

### Sub-Handler

#### Loading

```javascript
import { LoadingHandler } from 'react-handler';
import ArticleList from './ArticleList';

class Example extends Component {
  // ...

  state = {
    loading: false,
    articles: this.props.articles,
  };

  // ...

  render() {
    return (
      <LoadingHandler loading={this.state.loading}>
        <ArticleList articles={this.state.articles} />
      </LoadingHandler>
    );
  }
}
```

> Configuration:
* LoadingComponent - Define your own LoadingComponent
* loading - Is loading in process
* message - Define your own Loading-Message

***

#### Error

```javascript
import { ErrorHandler } from 'react-handler';
import ArticleList from './ArticleList';

class Example extends Component {
  // ...

  state = {
    error: '',
    articles: this.props.articles,
  };

  // ...

  render() {
    return (
      <ErrorHandler message={this.state.error}>
        <ArticleList articles={this.state.articles} />
      </ErrorHandler>
    );
  }
}
```

> Configuration:
* ErrorComponent - Define your own ErrorComponent
* message - Error-Message, also used for error-check

***

#### Empty

```javascript
import { EmptyHandler } from 'react-handler';
import ArticleList from './ArticleList';

class Example extends Component {
  // ...

  state = {
    articles: this.props.articles,
  };

  // ...

  render() {
    return (
      <EmptyHandler message="0 Articles found." checkedProperty={this.state.articles}>
        <ArticleList articles={this.state.articles} />
      </EmptyHandler>
    );
  }
}
```

> Configuration:
* EmptyComponent - Define your own EmptyComponent
* checkedProperty - Property, which should not be empty
* message - Define your Empty-Message

***

#### ErrorEmptyHandler

```javascript
import { EmptyHandler } from 'react-handler';
import ArticleList from './ArticleList';

class Example extends Component {
  // ...

  state = {
    articles: this.props.articles,
    error: '',
  };

  // ...

  render() {
    return (
      <ErrorEmptyHandler
        errorMessage={this.state.error}
        emptyMessage="0 Articles found."
        checkedProperty={this.state.articles}
      >
        <ArticleList articles={this.state.articles} />
      </ErrorEmptyHandler>
    );
  }
}
```

> Configuration:
* Combines both Configuration´s from EmptyHandler and ErrorHandler, the messages will only be prefixed.

## Contributing

* Fork and clone this repository
* Make your changes
* Check tests and linter
* Commit & push your changes
* Create pull request

## License
Copyright (c) 2016-2017 Chris Helgert. See [License](./LICENSE) for details.
