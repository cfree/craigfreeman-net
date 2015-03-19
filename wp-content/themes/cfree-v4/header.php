<?php
/**
 * The header for our theme.
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
	<!--[if lt IE 8]>
	    <p class="browserupgrade">
	    	You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
	    </p>
	<![endif]-->
	<header class="site-header" role="banner">
		<div class="container">
			<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'cfree' ); ?></a>		
			<div class="site-branding">
				<h2 class="site-title">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
						<img class="site-title__logo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo.svg" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" />
					</a>
				</h2>
			</div><!-- .site-branding -->

			<ul class="site-header__social">
				<li><a class="site-social site-social--twitter" title="Twitter" href="https://twitter.com/craigfreeman" target="_blank"><?php _e( 'Twitter', 'cfree' ); ?></a></li>
				<li><a class="site-social site-social--linkedin" title="LinkedIn" href="https://linkedin.com/in/cfree" target="_blank"><?php _e( 'LinkedIn', 'cfree' ); ?></a></li>
				<li><a class="site-social site-social--meetup" title="Denver Code Club" href="http://meetup.com/denver-code-club" target="_blank"><?php _e( 'Denver Code Club', 'cfree' ); ?></a></li>
			</ul>

			<nav class="site-navigation" role="navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php _e( 'Primary Menu', 'cfree' ); ?></button>
				<?php 
					wp_nav_menu( array( 
						'theme_location' => 'primary',
						'menu_id' => 'primary-menu',
					) );
				?>
			</nav><!-- #site-navigation -->
		</div>
	</header><!-- .site-header -->