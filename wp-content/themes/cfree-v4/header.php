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
<meta name="google-site-verification" content="0WxNuolI-hVRiZmWEw41DhyUpTFkyq-WTFqqdYS-o7g" />

<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<link rel="apple-touch-icon" sizes="57x57" href="<?php echo home_url(); ?>/favicons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="<?php echo home_url(); ?>/favicons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo home_url(); ?>/favicons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo home_url(); ?>/favicons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo home_url(); ?>/favicons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo home_url(); ?>/favicons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo home_url(); ?>/favicons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo home_url(); ?>/favicons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo home_url(); ?>/favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo home_url(); ?>/favicons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo home_url(); ?>/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="<?php echo home_url(); ?>/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo home_url(); ?>/favicons/favicon-16x16.png">
<link rel="manifest" href="<?php echo home_url(); ?>/manifest.json">
<meta name="msapplication-TileColor" content="#F1F1F1">
<meta name="msapplication-TileImage" content="<?php echo home_url(); ?>/favicons/ms-icon-144x144.png">
<meta name="theme-color" content="#F1F1F1">

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
			<button class="menu-toggle js-menu-toggle" type="button" aria-controls="primary-menu" aria-expanded="false"><?php _e( 'Menu', 'cfree' ); ?></button>
			<nav class="site-navigation" role="navigation">
				<?php 
					wp_nav_menu( array( 
						'theme_location' => 'primary',
						'menu_id' => 'primary-menu',
					) );
				?>
				<ul class="site-header__social">
					<li><a class="site-social site-social--twitter" title="Twitter" href="https://twitter.com/craigfreeman" target="_blank"><?php _e( 'Twitter', 'cfree' ); ?></a></li>
					<li><a class="site-social site-social--github" title="GitHub" href="https://github.com/cfree" target="_blank"><?php _e( 'GitHub', 'cfree' ); ?></a></li>
					<li><a class="site-social site-social--linkedin" title="LinkedIn" href="https://linkedin.com/in/cfree" target="_blank"><?php _e( 'LinkedIn', 'cfree' ); ?></a></li>
					<li><a class="site-social site-social--meetup" title="Denver Code Club" href="http://meetup.com/denver-code-club" target="_blank"><?php _e( 'Denver Code Club', 'cfree' ); ?></a></li>
					<li><a class="site-social site-social--message js-message" title="Message Me" href="#message" data-addr="craigfreeman@gmail.com" target="_blank"><?php _e( 'Message Me', 'cfree' ); ?></a></li>
				</ul>
			</nav><!-- #site-navigation -->
		</div>
	</header><!-- .site-header -->