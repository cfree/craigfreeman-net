<?php
/**
 * The template for displaying portfolio archive page.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package cfree
 */

get_header(); ?>
<div id="content" class="site-content">
	<div id="primary" class="content-area">
		<section class="masthead masthead--code">
			<div class="container">
				<h1 class="masthead__title"><?php _e( 'Portfolio', 'cfree' ); ?></h1>
			</div>
		</section>

		<main id="main" class="site-main" role="main">
			<div class="container">
				<div class="portfolio__main">
					<?php if ( have_posts() ) : ?>
						<div class="has-columns">
							<?php /* Start the Loop */ ?>
							<?php while ( have_posts() ) : the_post(); ?>

								<?php
									/* Include the Post-Format-specific template for the content.
									 * If you want to override this in a child theme, then include a file
									 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
									 */
									get_template_part( 'excerpt', 'portfolio' );
								?>

							<?php endwhile; ?>
						</div>

						<?php the_posts_navigation(); ?>

					<?php else : ?>

						<?php get_template_part( 'content', 'none' ); ?>

					<?php endif; ?>
				</div>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->
</div>
<?php get_footer(); ?>
