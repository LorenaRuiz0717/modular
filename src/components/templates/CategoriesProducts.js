import React from "react";
import { connect } from "react-redux";


const CategoriesProducts = ({categories}) => {
	const printCategories = categories.map((categorie) => (
		<div class="col-sm-3">
        	<article class="col-item">
        		<div class="photo imgCategories">
        			<a href="#/"> 
					<img src={categorie.img} class="img-responsive" alt="ProductImage" /> 
					</a>
        		</div>
        		<div class="info">
        			<div class="row">
        				<div class="price-details col-md-12">
        					<h3 >
        						{categorie.name}
        					</h3>
        					<p>{categorie.description}</p>
        					{/* <span class="price-new">$110.00</span> */}
        				</div>
        			</div>
        		</div>
        	</article>
        </div> 
	));
    return (
<div class="container">
	
<h2>Categorias</h2>
	<div class="row containerCategories">
		{printCategories}
	</div>
</div>
  );
};

const mapStateToProps = (state) => ({
	categories: state.categories,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(CategoriesProducts);
  
