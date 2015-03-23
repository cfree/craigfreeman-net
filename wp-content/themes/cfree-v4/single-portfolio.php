<?php
/**
 * The template for displaying portfolio single page.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package cfree
 */

get_header(); ?>
<div id="content" class="site-content">
	<div id="primary" class="content-area">
		<section class="masthead masthead--typewriter">
			<div class="container">
				<h2 class="masthead__title"><?php _e( 'Portfolio', 'cfree' ); ?></h2>
			</div>
		</section>

		<main id="main" class="site-main container" role="main">
			<div class="page-content">
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', 'page' ); ?>

					<?php the_post_navigation(); ?>

					<?php
						// If comments are open or we have at least one comment, load up the comment template
						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif;
					?>

				<?php endwhile; // end of the loop. ?>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->
</div>
<?php get_footer(); ?>
