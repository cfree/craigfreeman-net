<?php
/**
 * The template for displaying search results pages.
 *
 * @package cfree
 */

get_header(); ?>
<div id="content" class="site-content">
	<div id="primary" class="content-area">
		<section class="masthead masthead--spyglass">
			<div class="container">
				<h1 class="masthead__title has-subtitle"><?php _e( 'Search', 'cfree' ); ?></h1>
				<h2 class="masthead__subtitle"><?php printf( __( 'Results For: %s', 'cfree' ), get_search_query() ); ?></h2>
			</div>
		</section>

		<main id="main" class="site-main has-aside" role="main">
			<div class="container">
				<div class="blog__main">

					<?php if ( have_posts() ) : ?>

						<?php /* Start the Loop */ ?>
						<?php while ( have_posts() ) : the_post(); ?>

							<?php
							/**
							 * Run the loop for the search to output the results.
							 * If you want to overload this in a child theme then include a file
							 * called content-search.php and that will be used instead.
							 */
							get_template_part( 'excerpt' );
							?>

						<?php endwhile; ?>

						<?php the_posts_navigation(); ?>

					<?php else : ?>

						<?php get_template_part( 'content', 'none' ); ?>

					<?php endif; ?>

				</div><!-- .blog__main -->

				<?php get_sidebar(); ?>

			</div><!-- .container -->
		</main><!-- #main -->
	</div><!-- #primary -->
</div>
<?php get_footer(); ?>
