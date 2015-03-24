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
	<div id="primary" class="content-area">
		<section class="masthead masthead--build">
			<div class="container">
				<h1 class="masthead__title has-subtitle"><?php bloginfo( 'title', 'cfree' ); ?></h1>
				<div class="masthead__subtitle"><?php bloginfo( 'description' ); ?></div>
			</div>
		</section>

		<main id="main" class="site-main container" role="main">
			<div class="home__intro">
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', 'page' ); ?>

				<?php endwhile; // end of the loop. ?>
			</div>
		</main><!-- #main -->

		<section class="home__breakdown--stack">
			<div class="container">
				<div class="home__breakdown--design">
					<h2><?php _e( 'Design', 'cfree' ); ?></h2>
					<p>Augue in a sed! Ut sed. Integer sit, auctor! Sit adipiscing turpis porttitor turpis in, ut, turpis sed integer elit a porttitor, nisi a urna, nascetur, sociis massa sociis porttitor, in mattis lectus scelerisque. Ultrices enim a nisi nunc montes non dapibus augue quis etiam! Est. Placerat mauris?</p>
				</div>
				<div class="home__breakdown--front">
					<h2><?php _e( 'Front-End', 'cfree' ); ?></h2>
					<p> Vel, a phasellus lacus a duis parturient, tincidunt enim, rhoncus sed magna, est proin urna? Risus ultrices porta, porta nisi, et adipiscing aliquam nascetur nec, vel integer platea auctor nec elit vel turpis et in scelerisque penatibus </p>
				</div>
				<div class="home__breakdown--back">
					<h2><?php _e( 'Back-End', 'cfree' ); ?></h2>
					<p> Vel, a phasellus lacus a duis parturient, tincidunt enim, rhoncus sed magna, est proin urna? Risus ultrices porta, porta nisi, et adipiscing aliquam nascetur nec, vel integer platea auctor nec elit vel turpis et in scelerisque penatibus </p>
				</div>
			</div><!-- .container -->
		</section>

		<section class="home__portfolio container">
			<h2><?php _e( 'Portfolio', 'cfree' ); ?></h2>
			
			<div class="has-columns">
				<?php 
					$portfolio_args = array(
						'posts_per_page' => 3,
						'post_type' => 'portfolio',
					);

					$portfolio_query = new WP_Query( $portfolio_args );

					if ( $portfolio_query->have_posts() ):
						while ( $portfolio_query->have_posts() ):
							$portfolio_query->the_post();
							get_template_part( 'excerpt', 'portfolio' );
						endwhile;
						wp_reset_postdata();

					endif;
				?>
			</div>

			<p>
				<a href="<?php echo home_url( '/portfolio/' ) ?>" class="alignright button button--primary--ghost"><?php _e( 'View All', 'cfree' ); ?></a>
			</p>
		</section>

		<section class="section--dark">
			<div class="container">
				<a href="https://github.com/cfree" class="button button--primary--ghost-on-hover"><?php _e( 'GitHub', 'cfree' ); ?></a>
				<a href="<?php echo site_url( '/resume' ); ?>" class="button button--primary--ghost-on-hover"><?php _e( 'Resume', 'cfree' ); ?></a>
				<a href="http://linkedin.com/in/cfree" class="button button--primary--ghost-on-hover"><?php _e( 'LinkedIn', 'cfree' ); ?></a>
			</div><!-- .container -->
		</section>

		<section class="home__articles container">
			<h2><?php _e( 'Articles', 'cfree' ); ?></h2>

			<div class="has-columns">
				<?php 
					$article_args = array(
						'posts_per_page' => 3,
					);

					$article_query = new WP_Query( $article_args );

					if ( $article_query->have_posts() ):
						while ( $article_query->have_posts() ):
							$article_query->the_post();
				?>
							<article class="column article-item">
								<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
								<?php the_excerpt(); ?>
							</article>
				<?php
						endwhile;
						wp_reset_postdata();

					endif;
				?>
			</div>

			<hr>

			<p>
				<a href="<?php echo home_url( '/blog' ); ?>" class="alignright button button--primary--ghost"><?php _e( 'View All', 'cfree' ); ?></a>
			</p>
		</section>
	</div><!-- #primary -->
</div><!-- #content -->
<?php get_footer(); ?>
