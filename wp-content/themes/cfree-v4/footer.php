<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package cfree
 */
?>
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container">
			<div class="site-info">
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