<?php
/**
 * The template for displaying archive pages.
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
				<h1 class="masthead__title has-subtitle"><?php _e( 'Archives', 'cfree' ); ?></h1>
				<?php the_archive_title( '<h2 class="masthead__subtitle">', '</h2>' ); ?>
			</div>
		</section>

		<main id="main" class="site-main" role="main">
			<div class="container">

				<?php if ( have_posts() ) : ?>

					<?php /* Start the Loop */ ?>
					<?php while ( have_posts() ) : the_post(); ?>

						<?php
							/* Include the Post-Format-specific template for the content.
							 * If you want to override this in a child theme, then include a file
							 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
							 */
							get_template_part( 'excerpt' );
						?>

					<?php endwhile; ?>

					<?php the_posts_navigation(); ?>

				<?php else : ?>

					<?php get_template_part( 'content', 'none' ); ?>

				<?php endif; ?>

			</div>
		</main><!-- #main -->
	</div><!-- #primary -->
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
