<?php
/**
 * @package cfree
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-excerpt' ); ?>>
	<div class="entry-meta">
		<?php if ( 'post' == get_post_type() ) : ?>
			<?php cfree_posted_on(); ?>
		<?php endif; ?>
	</div><!-- .entry-meta -->
	<div class="post__content">
		<header class="entry-header">
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header><!-- .entry-header -->

		<div class="entry-content">
			<?php the_content(); ?>
			<?php
				wp_link_pages( array(
					'before' => '<div class="page-links">' . __( 'Pages:', 'cfree' ),
					'after'  => '</div>',
				) );
			?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php cfree_entry_footer(); ?>
		</footer><!-- .entry-footer -->
	</div>
</article><!-- #post-## -->
