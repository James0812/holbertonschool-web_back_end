#!/usr/bin/env python3
"""Module contenant une fonction de pagination simple"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Retourne un tuple (start_index, end_index) correspondant
    aux index de pagination pour une page donnée.

    Args:
        page (int): numéro de page (1-indexé)
        page_size (int): nombre d’éléments par page

    Returns:
        tuple: (start_index, end_index)
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
