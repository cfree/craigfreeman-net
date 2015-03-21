<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package cfree
 */
?>
	<section class="section--dark">
		<div class="container">
			<a class="button--secondary--ghost-on-hover button--message js-message" href="#message" data-addr="craigfreeman@gmail.com">craigfreeman<i class="icon-atmark"></i>gmail</a>
		</div>
	</section>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container">
			<div class="site-info">
				<!-- <a href="#" class="back-to-top js-scroll-up"><?php _e( 'Back to Top', 'cfree' ); ?></a> -->
				<p>
					<?php printf( __( '&copy; %s Craig Freeman. All rights reserved.', 'cfree' ), date('Y') ); ?><br/>
					<?php _e( 'Made in', 'cfree' ); ?> <i class="icon-mountain"></i> <?php _e( 'Colorado', 'cfree' ); ?>
				</p>
			</div><!-- .site-info -->
		</div>
	</footer><!-- #colophon -->
</div><!-- .site -->

<?php wp_footer(); ?>

</body>
</html>