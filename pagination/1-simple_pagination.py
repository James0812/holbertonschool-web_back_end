#!/usr/bin/env python3
"""Simple pagination module"""

import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Retourne un tuple contenant les index de début et de fin
    pour une pagination donnée.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retourne une page de données selon les paramètres donnés.
        """
        # ✔ Vérifications (IMPORTANT ALX)
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # ✔ Récupération des index
        start, end = index_range(page, page_size)

        # ✔ Dataset
        dataset = self.dataset()

        # ✔ Retour de la page
        return dataset[start:end]
