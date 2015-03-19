<?php
/**
 * Template Name: Home
 *
 * Displays the home page
 *
 * @package cfree
 */

get_header();

?>
<div id="content" class="site-content">
	<div id="content" class="site-content__inner">
		<div id="primary" class="content-area">
			<section class="masthead masthead--typewriter">
				<div class="container">
					<h1 class="masthead__title masthead__title__two-lines">
						<?php _e( 'Front-End Engineering', 'cfree' ); ?>
					</h1>
				</div>
			</section>

			<div class="container">
				<main id="main" class="site-main" role="main">
					<?php while ( have_posts() ) : the_post(); ?>

						<?php get_template_part( 'content', 'page' ); ?>

					<?php endwhile; // end of the loop. ?>
				</main><!-- #main -->
			</div><!-- .container -->

			<section class="home__breakdown--front-back">
				<div class="container">
					<a class="button--secondary--ghost-on-hover button--message js-message" href="#" data-addr="craigfreeman@gmail.com">craigfreeman<i class="icon-atmark"></i>gmail</a>
				</div>
			</section>
		</div><!-- #primary -->
</div><!-- #content -->
<?php get_footer(); ?>
