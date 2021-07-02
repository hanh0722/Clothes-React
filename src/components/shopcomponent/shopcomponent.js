import React from "react";
import { Link } from "react-router-dom";
import styles from "./sale.module.scss";
class ShopComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      chosen: [],
      nameProduct: "",
    };
  }
  componentDidMount() {
    this.setState({ name: this.props.name });
  }
  setLink = () => {
    // we can't setState because setState is callback function => it makes sessionStorage can't save immediately
    // after callback Click event
    sessionStorage.setItem("informationProduct", this.props.name);
    this.setState({ name: this.props.name });
  };
  render() {
    return (
      <div
        id={this.props.id}
        onClick={this.setLink}
        className={`card-component ${styles.component} ${this.props.className1}`}
      >
        <Link to={`/shop/product/${this.props.id}/${this.props.name}`}>
          <img
            src={require(`../img/${this.props.url}`).default}
            alt=""
            loading="lazy"
          />
        </Link>
        <div className="infor-card">
          <p>{this.props.name}</p>
          {this.props.sale !== null ? (
            <>
              <div>
                <p>
                  <span>${this.props.sale}.00</span>${this.props.price}.00
                </p>
              </div>
              <strong className={styles.sale}>
                {Math.round(
                  ((this.props.sale - this.props.price) / this.props.sale) * 100
                )}
                %
              </strong>
            </>
          ) : (
            <p>${this.props.price}.00</p>
          )}
        </div>
      </div>
    );
  }
}

export default ShopComponent;
