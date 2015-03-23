<?php
/**
 * The template part for displaying portfolio excerpt results.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package cfree
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'columns--three portfolio-item' ); ?>>
	<div class="portfolio-item__content">
		<h3><?php the_title(); ?></h3>
		<a href="<?php the_permalink(); ?>" class="button button--primary"><?php _e( 'View', 'cfree' ); ?></a>
	</div>
	<?php 
		if ( has_post_thumbnail() ):
			the_post_thumbnail( 'portfolio' );
		else:
	?>
		<img src="http://placekitten.com/g/375/250">
	<?php endif; ?>
</article>
