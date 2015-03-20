<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package cfree
 */

get_header(); ?>
<div id="content" class="site-content">
	<div id="primary" class="content-area">
		<section class="masthead masthead--typewriter">
			<div class="container">
				<h1 class="masthead__title">
					<?php the_title(); ?>
				</h1>
			</div>
		</section>

		<main id="main" class="site-main container" role="main">
			<div class="page-content">
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', 'page' ); ?>

				<?php endwhile; // end of the loop. ?>
			</div>
		</main><!-- #main -->
	</div>
</div>
<?php get_footer(); ?>
