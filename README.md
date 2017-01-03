# React-Handler

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

  return (
    <Handler
      loading={this.state.loading}
      errorMessage={this.state.error}
      loadingMessage="loading..."
      emptyMessage="0 Articles found"
      Component={ArticleList}
      componentProps={{ articles }}
      emptyPropertyKey="articles"
    />
  );
}
```

> Configuration
* All params from Subhandler´s will be available in Handler (Messages will only be prefixed)

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

  return (
    <LoadingHandler
      loading={this.state.loading}
      Component={ArticleList}
      componentProps={{ articles }}
    />
  );
}
```

> Configuration:
* LoadingComponent - Define your own LoadingComponent
* Component - Component, when you´re not loading anything
* componentProps - Properties for your Component
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

  return (
    <ErrorHandler
      message={this.state.error}
      Component={ArticleList}
      componentProps={{ articles }}
    />
  );
}
```

> Configuration:
* ErrorComponent - Define your own ErrorComponent
* Component - Component, when there´s no error
* componentProps - Properties for your Component
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

  return (
    <EmptyHandler
      message="0 Articles found."
      Component={ArticleList}
      componentProps={{ articles }}
      emptyPropertyKey="articles"
    />
  );
}
```

> Configuration:
* EmptyComponent - Define your own EmptyComponent
* Component - Component, when the property is not empty
* componentProps - Properties for your Component
* emptyPropertyKey - which Property should be checked
* message - Define your Empty-Message

## Contributing

* Fork and clone this repository
* Make your changes
* Check tests and linter
* Commit & push your changes
* Create pull request

## License
Copyright (c) 2016-2017 Chris Helgert. See [License](./LICENCSE) for details.
