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
		<section class="masthead masthead--typewriter">
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
				<article class="columns--three portfolio-item">
					<div class="portfolio-item__content">
						<h3>Portfolio Item One</h3>
						<a href="#" class="button button--primary"><?php _e( 'View', 'cfree' ); ?></a>
					</div>
					<img src="http://placekitten.com/g/375/250">
				</article>
				<article class="columns--three portfolio-item">
					<div class="portfolio-item__content">
						<h3>Portfolio Item Two, now with two lines</h3>
						<a href="#" class="button button--primary">View</a>
					</div>
					<img src="http://placekitten.com/g/375/250">
				</article>
				<article class="columns--three portfolio-item">
					<div class="portfolio-item__content">
						<h3>Portfolio Item Three</h3>
						<a href="#" class="button button--primary">View</a>
					</div>
					<img src="http://placekitten.com/g/375/250">
				</article>
			</div>

			<p>
				<a href="#" class="alignright button button--primary--ghost"><?php _e( 'View All', 'cfree' ); ?></a>
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
				<article class="columns--three article-item">
					<h3><a href="#">Text Article One</a></h3>
					<p>Augue in a sed! Ut sed. Integer sit, auctor! Sit adipiscing turpis porttitor turpis in... <a href="#" class="read-more"><?php _e( 'More', 'cfree' ); ?></a></p>
				</article>
				<article class="columns--three article-item">
					<h3><a href="#">Text Article Two, now with two lines</a></h3>
					<p>Augue in a sed! Ut sed. Integer sit, auctor! Sit adipiscing turpis porttitor turpis in... <a href="#" class="read-more"><?php _e( 'More', 'cfree' ); ?></a></p>
				</article>
				<article class="columns--three article-item">
					<h3><a href="#">Text Article Three</a></h3>
					<p>Augue in a sed! Ut sed. Integer sit, auctor! Sit adipiscing turpis porttitor turpis in... <a href="#" class="read-more"><?php _e( 'More', 'cfree' ); ?></a></p>
				</article>
				<article class="columns--three article-item">
					<h3><a href="#">Text Article Four</a></h3>
					<p>Augue in a sed! Ut sed. Integer sit, auctor! Sit adipiscing turpis porttitor turpis in... <a href="#" class="read-more"><?php _e( 'More', 'cfree' ); ?></a></p>
				</article>
				<article class="columns--three article-item">
					<h3><a href="#">Text Article Five</a></h3>
					<p>Augue in a sed! Ut sed. Integer sit, auctor! Sit adipiscing turpis porttitor turpis in... <a href="#" class="read-more"><?php _e( 'More', 'cfree' ); ?></a></p>
				</article>
				<article class="columns--three article-item">
					<h3><a href="#">Text Article Six</a></h3>
					<p>Augue in a sed! Ut sed. Integer sit, auctor! Sit adipiscing turpis porttitor turpis in... <a href="#" class="read-more"><?php _e( 'More', 'cfree' ); ?></a></p>
				</article>
			</div>

			<hr>

			<p>
				<a href="#" class="alignright button button--primary--ghost"><?php _e( 'View All', 'cfree' ); ?></a>
			</p>
		</section>
	</div><!-- #primary -->
</div><!-- #content -->
<?php get_footer(); ?>
