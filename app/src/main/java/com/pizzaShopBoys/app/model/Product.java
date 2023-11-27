package com.pizzaShopBoys.app.model;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String category;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private List<ProductVariant> variant = new List<ProductVariant>() {
        @Override
        public int size() {
            return 0;
        }

        @Override
        public boolean isEmpty() {
            return false;
        }

        @Override
        public boolean contains(Object o) {
            return false;
        }

        @Override
        public Iterator<ProductVariant> iterator() {
            return null;
        }

        @Override
        public Object[] toArray() {
            return new Object[0];
        }

        @Override
        public <T> T[] toArray(T[] a) {
            return null;
        }

        @Override
        public boolean add(ProductVariant productVariant) {
            return false;
        }

        @Override
        public boolean remove(Object o) {
            return false;
        }

        @Override
        public boolean containsAll(Collection<?> c) {
            return false;
        }

        @Override
        public boolean addAll(Collection<? extends ProductVariant> c) {
            return false;
        }

        @Override
        public boolean addAll(int index, Collection<? extends ProductVariant> c) {
            return false;
        }

        @Override
        public boolean removeAll(Collection<?> c) {
            return false;
        }

        @Override
        public boolean retainAll(Collection<?> c) {
            return false;
        }

        @Override
        public void clear() {

        }

        @Override
        public ProductVariant get(int index) {
            return null;
        }

        @Override
        public ProductVariant set(int index, ProductVariant element) {
            return null;
        }

        @Override
        public void add(int index, ProductVariant element) {

        }

        @Override
        public ProductVariant remove(int index) {
            return null;
        }

        @Override
        public int indexOf(Object o) {
            return 0;
        }

        @Override
        public int lastIndexOf(Object o) {
            return 0;
        }

        @Override
        public ListIterator<ProductVariant> listIterator() {
            return null;
        }

        @Override
        public ListIterator<ProductVariant> listIterator(int index) {
            return null;
        }

        @Override
        public List<ProductVariant> subList(int fromIndex, int toIndex) {
            return null;
        }
    };

    protected Product() {
    };

    public Product(String name, String category) {
        this.name = name;
        this.category = category;
    }

    public Product(String name, String category, ArrayList<ProductVariant> variant) {
        this.name = name;
        this.category = category;
        this.variant = variant;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category='" + category + '\'' +
                '}';
    }

    public List<ProductVariant> getVariant() {
        return variant;
    }

    public void setVariant(ArrayList<ProductVariant> variant) {
        this.variant = variant;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
