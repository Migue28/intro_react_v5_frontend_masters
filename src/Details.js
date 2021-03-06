import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  state = { loading: true };
  const;

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          breed: animal.breeds.primary,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          loading: false,
        });
      })
      .catch((e) => this.setState({ error: e }));
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading ...</h1>;
    }

    const { name, animal, breed, location, description, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => {
              return (
                <button style={{ backgroundColor: theme }}>Adopt {name}</button>
              );
            }}
          </ThemeContext.Consumer>
          <p>{description}s</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
