import React from "react";
import { connect } from "react-redux";

const GalleryInstagram = ({ galleryInstagram }) => {
  const printImg = galleryInstagram.map((photo) => (
    <img className="imgGallery" src={photo.img} alt="img" key={photo.id}></img>
  ));
  return (
    <div className="containerGallery">
      <h6>Instagram</h6>
      <h2>#Espufi</h2>
      <div className="gallery">
       {printImg}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  galleryInstagram: state.galleryInstagram,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryInstagram);
