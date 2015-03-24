<?php
/**
 * Define custom post types and meta
 *
 * @package cfree
 */

class Cfree_Custom_Data {
	public function __construct() {
		add_action( 'init', array( $this, 'create_post_types' ) );
		add_action( 'init', array( $this, 'create_taxonomies' ) );
	}

	public function create_post_types() {
		$labels = array(
			'name'               => _x( 'Portfolio', 'post type general name', 'cfree' ),
			'singular_name'      => _x( 'Portfolio', 'post type singular name', 'cfree' ),
			'menu_name'          => _x( 'Portfolio', 'admin menu', 'cfree' ),
			'name_admin_bar'     => _x( 'Portfolio', 'add new on admin bar', 'cfree' ),
			'add_new'            => _x( 'Add New', 'portfolio item', 'cfree' ),
			'add_new_item'       => __( 'Add New Portfolio Item', 'cfree' ),
			'new_item'           => __( 'New Portfolio Item', 'cfree' ),
			'edit_item'          => __( 'Edit Portfolio Item', 'cfree' ),
			'view_item'          => __( 'View Portfolio Item', 'cfree' ),
			'all_items'          => __( 'All Portfolio Items', 'cfree' ),
			'search_items'       => __( 'Search Portfolio', 'cfree' ),
			'parent_item_colon'  => __( 'Parent Portfolio Items:', 'cfree' ),
			'not_found'          => __( 'No portfolio items found.', 'cfree' ),
			'not_found_in_trash' => __( 'No portfolio items found in Trash.', 'cfree' )
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 
										'slug' => 'portfolio',
										'with_front' => false,9
									),
			'capability_type'    => 'post',
			'menu_icon'          => 'dashicons-portfolio',
			'has_archive'        => true,
			'hierarchical'       => false,
			'supports'           => array( 
				'title',
				'editor',
				'thumbnail',
				'revisions',
			),
		);

		register_post_type( 'portfolio', $args );
	}

	public function create_taxonomies() {
		register_taxonomy(
			'projects',
			'portfolio',
			array(
				'label' => __( 'Projects' ),
				'rewrite' => array( 'slug' => 'projects' ),
				'hierarchical' => true,
			)
		);
	}
}

new Cfree_Custom_Data;
