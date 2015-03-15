<?php
/**
 * Template Name: Kitchen Sink
 *
 * Displays all of the possible HTML elements
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
	<!--[if lt IE 8]>
	    <p class="browserupgrade">
	    	You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
	    </p>
	<![endif]-->
	<div class="container">
		<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'cfree' ); ?></a>

		<header id="masthead" class="site-header" role="banner">
			<div class="site-branding">
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation" role="navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php _e( 'Primary Menu', 'cfree' ); ?></button>
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->
	  	</header><!-- #masthead -->

	  	<div id="content" class="site-content">
	  		<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<h1>Heading Level 1</h1>

					<h2>Heading Level 2</h2>

					<h3>Heading Level 3</h3>

					<h4>Heading Level 4</h4>

					<h5>Heading Level 5</h5>

					<h6>Heading Level 6</h6>

					<p>
						This is a paragraph of text which has all the most common html elements in it such as the <strong>strong element</strong> which is used to give text strong importance. 
						You could of course use the <b>b element</b> which represents a span of text stylistically different from normal text, without conveying any special importance or relevance. 
						The <mark>mark element</mark> which represents highlighted text, i.e., a run of text marked for reference purposes. <em>The HTML em element marks text that has stress emphasis.</em>
						You could of course use the <i>i element</i> which represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. 
						<i>It is typically displayed in italic type</i>. The next piece of text is marked up using the code element <code>function()</code> and finally links will be styled <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/a">like this</a>.
					</p>
							 
					<ol>
						<li>List item one</li>
						<li>List item two</li>
						<li>List item three</li>
					</ol>

					<dl>
					  <dt>Firefox</dt>
					  <dd>A free, open source, cross-platform, graphical web browser
						  developed by the Mozilla Corporation and hundreds of volunteer
					  </dd>
					</dl>

					<blockquote>
						<p>Design is the fundamental soul of a human-made creation that ends
						up expressing itself in successive outer layers of the product or
						service.</p>
					</blockquote>

					<ul>
						<li>List item one</li>
						<li>List item two</li>
						<li>List item three is actually a lot longer than you might expect. It's longer for no reason other than to demonstrate how the lines will wrap. Does that make sense?</li>
						<li>List item four</li>
					</ul>

					<pre>
						header h1 a { 
						  display: block; 
						  width: 300px; 
						  height: 80px; 
						}
					</pre>

					<p>This wraps your code in <code>pre</code> tags and <code>code</code> tags.</p>

					<table>
						<thead>
							<tr>
								<th>Heading (th)</th>
								<th>Heading (th)</th>
								<th>Heading (th)</th>
								<th>Heading (th)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>data</td>
								<td>data</td>
								<td>data</td>
								<td>data</td>
							</tr>
							<tr>
								<td>data</td>
								<td>data</td>
								<td>data</td>
								<td>data</td>
							</tr>
							<tr>
								<td>data</td>
								<td>data</td>
								<td>data</td>
								<td>data</td>
							</tr>
						</tbody>
					</table>

				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!-- #content -->

		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="site-info">
				<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'cfree' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'cfree' ), 'WordPress' ); ?></a>
				<span class="sep"> | </span>
				<?php printf( __( 'Theme: %1$s by %2$s.', 'cfree' ), 'cfree', '<a href="http://underscores.me/" rel="designer">Underscores.me</a>' ); ?>
			</div><!-- .site-info -->
		</footer><!-- #colophon -->
	</div><!-- .container -->
</div><!-- .site -->

<?php wp_footer(); ?>

</body>
</html>

			
