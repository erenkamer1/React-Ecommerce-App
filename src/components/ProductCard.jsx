import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import toast from "react-hot-toast";
import "./product-card.css";
import { Link } from "react-router-dom";

/**
 * ProductCard
 * Responsive Bootstrap product card with variant selector and stock state.
 * Props are intentionally simple to fit the existing Fake Store data.
 */
const ProductCard = ({
  id,
  title,
  price,
  image,
  inStock = true,
  variants = ["Default"],
}) => {
  const dispatch = useDispatch();
  const [selectedVariant, setSelectedVariant] = useState(
    variants && variants.length > 0 ? variants[0] : "Default"
  );

  const formattedPrice = useMemo(() => {
    if (typeof price === "number") return `$ ${price.toFixed(2)}`;
    return `$ ${price}`;
  }, [price]);

  const handleAddToCart = () => {
    if (!inStock) return;
    const productForCart = {
      id,
      title,
      price,
      image,
      variant: selectedVariant,
    };
    dispatch(addCart(productForCart));
    toast.success("Added to cart");
  };

  return (
    <div className="card product-card h-100 text-center">
      <div className="position-relative">
        <img
          className="card-img-top p-3 product-card__image"
          src={image}
          alt={title}
        />
        {!inStock ? (
          <span className="badge bg-secondary position-absolute top-0 start-0 m-2">
            Out of Stock
          </span>
        ) : null}
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate" title={title}>
          {title}
        </h5>
        <ul className="list-group list-group-flush my-2">
          <li className="list-group-item lead">{formattedPrice}</li>
        </ul>

        {variants && variants.length > 0 && (
          <div className="mb-3">
            <label className="form-label small text-muted">Variant</label>
            <select
              className="form-select"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              disabled={!inStock}
              aria-label="Select product variant"
            >
              {variants.map((variant) => (
                <option key={`${id}-${variant}`} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-auto">
          <button
            type="button"
            className={`btn w-100 ${inStock ? "btn-dark" : "btn-outline-secondary"}`}
            onClick={handleAddToCart}
            disabled={!inStock}
            aria-disabled={!inStock}
          >
            {inStock ? "Add to Cart" : "Out of Stock"}
          </button>
          {inStock && (
            <Link to={`/product/${id}`} className="btn btn-outline-dark w-100 mt-2">
              Buy Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  inStock: PropTypes.bool,
  variants: PropTypes.arrayOf(PropTypes.string),
};

export default ProductCard;


