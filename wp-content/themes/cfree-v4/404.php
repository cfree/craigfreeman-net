<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package cfree
 */

?><!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
<script src="//use.typekit.net/fvl4wvq.js"></script>
<script>try{Typekit.load();}catch(e){}</script>

<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<link rel="apple-touch-icon" href="apple-touch-icon.png">

<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
<div class="site">
	<div class="breakpoint-context"></div>
	<!--[if lte IE 8]>
	    <p class="browserupgrade">
	    	You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
	    </p>
	<![endif]-->
	<div id="content" class="site-content">
		<div class="container">
			<h1 class="heading--404"><?php _e( 'Uh oh&hellip;', 'cfree' ); ?></h1>
			<h4 class="subheading--404"><?php _e( 'That page can\'t be found. Care to try again?', 'cfree' ); ?></h4>

			<form class="search-form--404" action="<?php echo home_url( '/' ); ?>">
				<input type="text" name="s">
				<button class="search-button search-button--404"><?php _e( 'Search', 'cfree' ); ?></button>
			</form>
		</div>

		<div class="notice--404">
			<a href="<?php echo home_url( '/' ); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo.svg" alt="<?php _e( '404', 'cfree' ); ?>"></a>
		</div>
	</div>
</div>
</body>
</html>